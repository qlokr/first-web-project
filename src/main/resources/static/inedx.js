  const dname = document.getElementById("dname");
    const fname = document.getElementById("fname");
    


    dname.onclick = function(event) {
    event.preventDefault();
    const x = fname.value.trim();   
      
      
      
      if (x == "محمد فال") {
        
        window.location.href = "doctors/محمد فال.html";
       
      } else if (x == "احمد") {
       
        
        
        
      }
    }
 
