"use strict";
function ask(question, yes, no) {
    if (confirm(question))
        yes();
    else
        no();
}
// 使用法: 関数 showOk, fshowCancel は ask の引数として渡されます
ask("Do you agree?", function () { alert('agree'); }, function () { alert('not agree'); });
alert('hello');
