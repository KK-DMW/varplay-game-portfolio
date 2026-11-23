System.register("chunks:///_virtual/level",["./level.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/level.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"6ab04gL5+xLA7AZk0QIY3v/","level",void 0),e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/level', 'chunks:///_virtual/level'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});