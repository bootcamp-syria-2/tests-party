function formatUserNames(users) {
    return users
      .filter(user => user.firstName)  
      .map(user => {
        if (!user.lastName) {
          return user.firstName;  
        }
        return `${user.firstName} ${user.lastName}`;  
      });
}