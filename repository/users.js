const client = require("./client");

class UserRepository {

    fetch_all_users() {
        return client.find_all("users")
    }

    add(user){
        return client.add("users", user)
            .then(db_obj => {
                return db_obj["ops"][0]["_id"]
            })
    }
}

module.exports = new UserRepository();