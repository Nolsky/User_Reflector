function User(username) {
  this.username = username;
}

User.prototype.battleCry = function() {
  return 'FOR NARNIAAAAAA!';
};

function GroupUser(orginization) {
  this.orginization = orginization;
  User.call(this, 'Group', User);
}

GroupUser.prototype.harlemShake = function() {
  console.log('Con los terroristas');
  return this.orginization + 'is now doing the Harlem Shake';
};

function SuperUser(adminLevel, group, name) {
  this.adminLevel = adminLevel;
  GroupUser.call(this, 'Earth Defense Force');
  User.call(this, 'Krillin');
}

SuperUser.prototype.justSaiyn = function() {
  this.adminLevel = 9000 + Math.ceil(Math.random() * 9999 );
  return this.adminLevel;
};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(GroupUser.prototype, User.prototype);
extend(SuperUser.prototype, GroupUser.prototype);

function reflector(obj) {
  console.log(obj.constructor.name);
  console.log(obj);
  console.log(Object.getPrototypeOf(obj));
  console.log(Object.getOwnPropertyNames(obj));
  if (Object.getPrototypeOf.obj !== null) {
    reflector(Object.getPrototypeOf(obj));
  }

}

var Kasi = new User('Kasi', null);
var DevLeague = new GroupUser('DevLeague');
var Krillin = new SuperUser(4);

// console.log(Object.getPrototypeOf(Krillin));
// console.log(Kasi);
// console.log(Object.getPrototypeOf(Kasi));
// console.log(DevLeague);
// console.log(Object.getPrototypeOf(DevLeague));
// console.log(Krillin);
// console.log(Object.getPrototypeOf(Krillin));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Krillin)));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Krillin))));

reflector(SuperUser);