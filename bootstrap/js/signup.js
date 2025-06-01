document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault(); // 폼 제출 막기

  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // 콘솔에 출력 (실제 저장은 안 됨)
  console.log('회원가입 정보:');
  console.log('이름:', name);
  console.log('이메일:', email);
  console.log('비밀번호:', password);

  alert('가입 정보가 콘솔에 출력되었습니다!');
});
