System.register("chunks:///_virtual/scenes",["./scenes.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/scenes.ts",["cc"],(function(){var e;return{setters:[function(c){e=c.cclegacy}],execute:function(){e._RF.push({},"6dbdbsni8pATKb08aU8SiCl","scenes",void 0),e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/scenes', 'chunks:///_virtual/scenes'); 
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