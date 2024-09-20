class Student {
    _id
    _name;
    _email;
    _birthday;
    constructor(id,name,email,birthday) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._birthday = birthday;
    }
    getInfo(){
        return `ID: ${this._id} Name: ${this._name} Email: ${this._email} Birthday: ${this._birthday}`;
    }
    setName(name) {
        this.name = name;
    }

}
