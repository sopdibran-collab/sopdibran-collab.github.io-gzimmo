import assert from "node:assert/strict";
import { parseDevisBody } from "../lib/contact.ts";

const valid = {
  nom: "Anne Rochat",
  telephone: "076 214 23 42",
  email: "anne@example.ch",
  prestation: "fin-de-bail",
  commune: "Romont",
  message: "Remise des clés vendredi.",
};

const empty = parseDevisBody({});
assert.equal(empty.ok, false);
if (!empty.ok) {
  assert.ok(empty.fields?.nom);
  assert.ok(empty.fields?.telephone);
  assert.ok(empty.fields?.email);
  assert.ok(empty.fields?.prestation);
  assert.ok(empty.fields?.commune);
}

const dotted = parseDevisBody({ ...valid, telephone: "......" });
assert.equal(dotted.ok, false);

const shortPhone = parseDevisBody({ ...valid, telephone: "1234567" });
assert.equal(shortPhone.ok, false);

const badEmail = parseDevisBody({ ...valid, email: "pas-un-email" });
assert.equal(badEmail.ok, false);

const international = parseDevisBody({ ...valid, telephone: "+41 76 214 23 42" });
assert.equal(international.ok, true);

const ok = parseDevisBody(valid);
assert.equal(ok.ok, true);
if (ok.ok) {
  assert.equal(ok.honeypot, false);
  assert.equal(ok.data.email, "anne@example.ch");
}

const honeypot = parseDevisBody({ ...valid, website: "https://spam.example" });
assert.equal(honeypot.ok, true);
if (honeypot.ok) assert.equal(honeypot.honeypot, true);

console.log("devis validation ok");
