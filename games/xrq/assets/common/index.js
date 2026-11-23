System.register("chunks:///_virtual/common",["./common.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/common.ts",["cc"],(function(){var c;return{setters:[function(e){c=e.cclegacy}],execute:function(){c._RF.push({},"b0aedLlzZFISaKKkGfJveVR","common",void 0),c._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/common', 'chunks:///_virtual/common'); 
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