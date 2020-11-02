function ask(question: string, yes: CallableFunction, no: CallableFunction) {
  if (confirm(question)) yes();
  else no();
}

// 使用法: 関数 showOk, fshowCancel は ask の引数として渡されます
ask(
  "Do you agree?",
  () => {
    alert("agree");
  },
  () => {
    alert("not agree");
  }
);