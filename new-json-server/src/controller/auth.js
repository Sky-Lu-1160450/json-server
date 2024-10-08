const TokenService = require('../service/token');
let userList = require('../../data/user_list');

// Login Handler
// module.exports.login = (req, res) => {
//   const { username, password } = req.body;
//   const userListData = userList();
//   const userInfo = userListData.find((v) => v.username === username && v.password === password);

//   if (!userInfo) {
//     return res.fail('Incorrect username or password');
//   }

//   const token = TokenService.create({ username });
//   delete userInfo.password;
//   res.success({ token, userInfo });
// };
module.exports.login = (req, res, next) => {
  const { username, password } = req.body
  console.log('==========', username, password)
  const userListData = userList()
  
  const userInfo = userListData.find((v) => v.username === username && v.password === password)
  if (!userInfo) {
    res.fail('请填写正确的用户名和密码')
    return
  }
  delete userInfo.password
  const token = TokenService.create({ username })
  res.success({
    token,
    userInfo,
  })
}

// Register Handler
module.exports.register = (req, res) => {
  const { username, password, nickname, avatar } = req.body;
  let userListData = userList();

  const existingUser = userListData.find(user => user.username === username);
  if (existingUser) {
    return res.fail('User already exists', 400);
  }

  const newUser = {
    id: userListData.length + 1,
    username,
    password,
    nickname: nickname || 'New User',
    avatar: avatar || '/imgs/me_page/robot.jpg',
  };

  userListData.push(newUser);
  userList = () => userListData;

  const updatedUserListContent = `
module.exports = () => {
  return ${JSON.stringify(userListData, null, 2)};
};
  `;

  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(__dirname, '../../data/user_list.js');

  try {
    fs.writeFileSync(filePath, updatedUserListContent);
    res.success('User registered successfully');
  } catch (error) {
    console.error('Failed to write to user_list.js:', error);
    res.fail('Registration failed, please try again');
  }
};
