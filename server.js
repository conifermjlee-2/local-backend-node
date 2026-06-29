const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// JSON 데이터를 받기 위한 미들웨어
app.use(express.json());

// 1. 단순한 GET API
app.get('/api/hello', (req, res) => {
  res.json({ message: "안녕하세요! 백엔드 서버가 정상 작동 중입니다." });
});

// 2. 파라미터를 받는 GET API (예: /api/users/1)
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: "홍길동", age: 25 });
});

// 3. 데이터를 전송받는 POST API
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  res.status(201).json({
    message: "데이터를 성공적으로 받았습니다!",
    data: receivedData
  });
});

app.listen(PORT, () => {
  console.log(`🚀 백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
