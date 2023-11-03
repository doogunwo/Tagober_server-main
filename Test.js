const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'sys'
});

const path = 'D:\ans_server\Tagober_server\Data\dgw0601\1684231827825-606919515.JPG';
const username = 'dgw0601';

const query = `update faceregister set imagePath = '${path}' where username = '${username}'`
/*

UPDATE faceregister
SET imagePath = 'new_image_path'
WHERE username = 'desired_username';


*/
//faceregister
console.log(query)
connection.query(query, (error, results) => {
  if (error) {
    console.error('Error inserting image path:', error);
    // 에러 처리
  } else {
    console.log('Image path inserted successfully');
    // 성공적으로 삽입된 경우의 처리
  }
});




