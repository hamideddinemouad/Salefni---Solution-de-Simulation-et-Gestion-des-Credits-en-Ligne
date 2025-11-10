document.addEventListener("DOMContentLoaded", () => {
  // Get all CTA buttons
  const ctaButtons = document.querySelectorAll(".btn-primary")

  // Add click handlers to simulation buttons
  ctaButtons.forEach((button) => {
    if (button.textContent.includes("Simuler") || button.textContent.includes("Commencer")) {
      button.addEventListener("click", (e) => {
        e.preventDefault()
        handleSimulationClick()
      })
    }
  })

  // Get login buttons
  const loginButtons = document.querySelectorAll(".btn-secondary")
  loginButtons.forEach((button) => {
    if (button.textContent.includes("Connexion")) {
      button.addEventListener("click", (e) => {
        e.preventDefault()
        handleLoginClick()
      })
    }
  })

  // Add scroll animation to feature cards
  observeElements()
})

// Handle simulation click
function handleSimulationClick() {
  console.log("[v0] User clicked simulation button")
  // Add your simulation logic here
  // Example: navigate to simulator or show modal
  alert("Redirection vers le simulateur...")
}

// Handle login click
function handleLoginClick() {
  console.log("[v0] User clicked login button")
  // Add your login logic here
  // Example: navigate to login page or show login modal
  alert("Redirection vers la connexion...")
}

// Observe elements for scroll animations
function observeElements() {
  const cards = document.querySelectorAll(".feature-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.animation = "slideUp 0.6s ease-out"
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  cards.forEach((card) => {
    card.style.opacity = "0"
    observer.observe(card)
  })
}

// Add keyboard navigation support
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const focusedElement = document.activeElement
    if (focusedElement.classList.contains("btn")) {
      focusedElement.click()
    }
  }
})
