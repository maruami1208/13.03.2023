class User {
    #name;
    #avatar;
    #role;
  
    constructor(name, avatar, role) {
      this.#name = name;
      this.#avatar = avatar;
      this.#role = role;
    }
  
    login(name, password) {
     
      if (name === this.#name && password === this.#password) {
      let authString = `${this.#name}_${this.#role}`;
        sessionStorage.setItem('auth', authString);
        return true;
      } else {
        return false;
      }
    }
  
    auth() {
    
     let authString = sessionStorage.getItem('auth');
      if (authString === `${this.#name}_${this.#role}`) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  class SuperAdmin extends User {
    constructor(name, avatar) {
      super(name, avatar, 'super admin');
    }
  
    delete() {
      
      localStorage.removeItem('data');
    }
  
    insert(data) {
     
      localStorage.setItem('data', JSON.stringify(data));
    }
  
    update(data) {
    
      localStorage.setItem('data', JSON.stringify(data));
    }
  
    select() {
      
      let data = JSON.parse(localStorage.getItem('data'));
      console.log(data);
 
    }
  }
  
  class Administrator extends User {
    constructor(name, avatar) {
      super(name, avatar, 'administrator');
    }
  }
  