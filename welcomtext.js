const welcome = (number, groupname) => {
    return `๐๐ฅ๐ @${number}. ๐๐๐ฃ๐ ๐๐๐ฆ-๐ฏ๐ข๐ง๐๐จ ๐๐จ ๐ ๐ซ๐ฎ๐ฉ๐จ ${groupname} digite !menu para ver a lista de comandos๐๐`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adeus @${number}. Trabekin ๐`
}
exports.bye = bye