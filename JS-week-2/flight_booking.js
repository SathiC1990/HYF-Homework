function getFullname(firstname, surname, useFormalName = false){
if (!firstname && !surname) 
    return "Name not provided"; {
    // Construct the fullname
    let fullname = firstname + " " + surname;
  
    // Add "Lord" prefix if useFormalName is true
    if (useFormalName) {
      fullname = "Lord " + fullname;
    }
  
    return fullname.trim(); // Trim any extra spaces
  }
}
  
  // Create variables fullname1 and fullname2 by calling the getFullname function
  const fullname1 = getFullname("Benjamin", "Hughes", true);
  const fullname2 = getFullname("Alice", "Johnson", false);
  
  // Log out the two fullname variables
  console.log(fullname1); // Output: Lord Benjamin Hughes
  console.log(fullname2); // Output: Alice Johnson