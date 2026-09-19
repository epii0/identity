import test from "node:test";
import assert from "node:assert/strict";
import { identity } from "./index.js";

test("exposes the official public brand and primary namespace", () => {
  assert.deepEqual(identity, {
    name: "eπi0",
    asciiName: "epii0",
    homepage: "https://epii0.com",
    github: "https://github.com/epii0",
    mavenNamespace: "org.epii0"
  });
});

test("consumers cannot change the shared identity metadata", () => {
  assert.throws(() => { identity.mavenNamespace = "com.epii0"; }, TypeError);
  assert.throws(() => { delete identity.name; }, TypeError);
  assert.throws(() => { identity.extra = true; }, TypeError);
  assert.equal(identity.mavenNamespace, "org.epii0");
});
