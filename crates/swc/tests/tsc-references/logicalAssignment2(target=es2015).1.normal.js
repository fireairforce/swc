//// [logicalAssignment2.ts]
var _a, _b, _c, _a_foo, _baz, _b_foo, _baz1, _c_foo, _baz2, _a_foo_bar, _b_foo_bar, _c_foo_bar;
(_a = a).baz && (_a.baz = result.baz);
(_b = b).baz || (_b.baz = result.baz);
var _baz3;
(_baz3 = (_c = c).baz) !== null && _baz3 !== void 0 ? _baz3 : _c.baz = result.baz;
(_a_foo = a.foo)[_baz = "baz"] && (_a_foo[_baz] = result.foo.baz);
(_b_foo = b.foo)[_baz1 = "baz"] || (_b_foo[_baz1] = result.foo.baz);
var _;
(_ = (_c_foo = c.foo)[_baz2 = "baz"]) !== null && _ !== void 0 ? _ : _c_foo[_baz2] = result.foo.baz;
(_a_foo_bar = a.foo.bar()).baz && (_a_foo_bar.baz = result.foo.bar().baz);
(_b_foo_bar = b.foo.bar()).baz || (_b_foo_bar.baz = result.foo.bar().baz);
var _baz4;
(_baz4 = (_c_foo_bar = c.foo.bar()).baz) !== null && _baz4 !== void 0 ? _baz4 : _c_foo_bar.baz = result.foo.bar().baz;
