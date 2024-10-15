const TokenService = require('../service/token');
let userList = require('../../data/user_list');


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
  let userListData = userList();  // Load the current user list

  const existingUser = userListData.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = {
    id: userListData.length + 1,
    username,
    password,
    nickname: nickname || 'New User',
    avatar: avatar || '/imgs/me_page/robot.jpg',
  };

  // Add the new user to the list
  userListData.push(newUser);

  // Write the updated user list to the file
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(__dirname, '../../data/user_list.js');

  const updatedUserListContent = `
module.exports = () => {
  return ${JSON.stringify(userListData, null, 2)};
};
  `;

  try {
    fs.writeFileSync(filePath, updatedUserListContent);  // Save the updated user list

    // Clear the cache and reload the user data after registration
    delete require.cache[require.resolve('../../data/user_list.js')];
    userList = require('../../data/user_list');

    res.status(200).json({ message: 'User registered successfully', code: 0 });
  } catch (error) {
    console.error('Failed to write to user_list.js:', error);
    res.status(500).json({ error: 'Registration failed, please try again' });
  }
};

// Update user address
module.exports.updateAddress = (req, res) => {
  const { userId, address } = req.body;

  if (!userId || !address) {
    return res.status(400).json({ error: 'User ID and address are required' });
  }

  let userListData = userList(); // Get the current list of users

  // Find the user by ID and update the address
  const userIndex = userListData.findIndex(user => user.id === parseInt(userId, 10));
  if (userIndex !== -1) {
    userListData[userIndex].address = address;

    // Save the updated user list back into user_list.js
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, '../../data/user_list.js');

    const updatedUserListContent = `
module.exports = () => {
  return ${JSON.stringify(userListData, null, 2)};
};
    `;

    try {
      fs.writeFileSync(filePath, updatedUserListContent); // Save the updated data to user_list.js
      res.status(200).json({ 
        code: 0, 
        data: {
          message: 'Address updated successfully' 
        }
      });
    } catch (error) {
      console.error('Failed to write to user_list.js:', error);
      res.status(500).json({ error: 'Failed to update address, please try again' });
    }
  } else {
    return res.status(404).json({ error: 'User not found' });
  }
};