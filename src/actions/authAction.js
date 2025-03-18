const API_ENDPOINT = "https://localhost:3000"
export async function sendCodeAction() {
    const url = `${API_ENDPOINT}/send-code`;
    const response = await fetch(url, {
        method : 'post',
        body: JSON.stringify({email});

    
    });
    const data = await requestAnimationFrame.json();
    return data;


}