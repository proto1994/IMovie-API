const {query} = require('./models/config');

const Utils = require('./utils');


// 打印脚本执行日志
const eventLog = function( err , sqlFile, index ) {
  if( err ) {
    console.log(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败 o(╯□╰)o ！`)
  } else {
    console.log(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 O(∩_∩)O !`)
  }
}


Utils.walkFile('./sql/', (sqlContent) => {
  if ( sqlContent.trim() ) {
    let result = await query( sqlContent );
    console.log(result)
    if ( result.serverStatus * 1 === 2 ) {
      eventLog( null,  key, i)
    } else {
      eventLog( true,  key, i)
    }
  }


console.log('sql脚本执行结束！')
console.log('请按 ctrl + c 键退出！')
})

