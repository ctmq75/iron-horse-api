const MemberService = {
    insertMember(db, newUser) {
      return db
        .insert(newUser)
        .into('mailinglist')
        .returning('*')
        .then(([newUser]) => newUser)
    }
}
module.exports = MemberService