// Generated by CoffeeScript 1.10.0
(function() {
  var S_000, S_001, c, expected_000, expected_001, solution, solution_000, solution_001;

  c = function() {
    return console.log.apply(console, arguments);
  };

  S_000 = "00-44   48 5555 8361";

  expected_000 = "004-448-555-583-61";

  S_001 = "0 - 22 1985--324";

  expected_001 = "022-198-53-24";

  solution = function(s) {
    var block_0, block_1, block_2, mod, mod_clean, pass_one, rayy_000, rayy_001;
    c = function() {
      return console.log.apply(console, arguments);
    };
    pass_one = function(s) {
      var idx;
      idx = 0;
      while (idx < s.length) {
        if ((s[idx] === ' ') || (s[idx] === '-')) {
          s.splice(idx, 1);
          arguments.callee(s);
        }
        idx = idx + 1;
      }
      return s;
    };
    mod_clean = function(rayy, acc) {
      var first_block;
      first_block = rayy.splice(-3, 3);
      acc.splice(0, 0, first_block);
      if (rayy.length !== 0) {
        return arguments.callee(rayy, acc);
      } else {
        return acc;
      }
    };
    block_2 = function(rayy) {
      var final, final2, final3, former, ir, last_block;
      last_block = rayy.splice(-2, 2);
      former = mod_clean(rayy, []);
      final = former.concat([last_block]);
      final2 = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = final.length; i < len; i++) {
          ir = final[i];
          results.push(ir.join(''));
        }
        return results;
      })();
      final3 = final2.join('-');
      return final3;
    };
    block_1 = function(rayy) {
      var cursor_0, cursor_1, final, final2, former, ir, last_block, second_to_last_block;
      last_block = rayy.splice(-2, 2);
      second_to_last_block = rayy.splice(-2, 2);
      former = mod_clean(rayy, []);
      cursor_0 = former.concat([second_to_last_block]);
      cursor_1 = cursor_0.concat([last_block]);
      final = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = cursor_1.length; i < len; i++) {
          ir = cursor_1[i];
          results.push(ir.join(''));
        }
        return results;
      })();
      final2 = final.join('-');
      return final2;
    };
    block_0 = function(rayy) {
      var final, former, ir;
      former = mod_clean(rayy, []);
      final = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = former.length; i < len; i++) {
          ir = former[i];
          results.push(ir.join(''));
        }
        return results;
      })();
      return final.join('-');
    };
    rayy_000 = s.split('');
    rayy_001 = pass_one(rayy_000);
    mod = rayy_001.length % 3;
    switch (mod) {
      case 2:
        return block_2(rayy_001);
      case 1:
        return block_1(rayy_001);
      case 0:
        return block_0(rayy_001);
    }
  };

  solution_000 = solution(S_000);

  c('solution_000', solution_000);

  solution_001 = solution(S_001);

  c('solution_001', solution_001);

}).call(this);
