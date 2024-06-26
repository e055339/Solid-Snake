document
  .getElementById('loginForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    try {
      const response = await fetch('/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        window.alert('Login successful!')
        window.location.href = '/game'
        // You can handle the success case here, such as redirecting the user
      } else {
        const errorData = await response.json()
        window.alert(`Error: ${errorData.error}`)
      }
    } catch (error) {
      console.error('Error:', error)
      window.alert('An error occurred while logging in.')
    }
  })
