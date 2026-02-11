       // Form submission handler
        document.getElementById('volunteerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                age: document.getElementById('age').value,
                event: document.getElementById('event').value,
                experience: document.getElementById('experience').value,
                agreement: document.getElementById('agreement').checked
            };

            // Validate required fields
            if (!formData.name || !formData.email || !formData.phone || !formData.agreement) {
                alert('Пожалуйста, заполните все обязательные поля');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Пожалуйста, введите корректный email');
                return;
            }

            // Show success message
            document.getElementById('successMessage').classList.add('show');
            
            // Reset form
            this.reset();

            // Scroll to success message
            document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Hide success message after 5 seconds
            setTimeout(function() {
                document.getElementById('successMessage').classList.remove('show');
            }, 5000);

            // Log form data (в реальном проекте здесь была бы отправка на сервер)
            console.log('Форма отправлена:', formData);
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Phone number formatting
        document.getElementById('phone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value[0] === '7' || value[0] === '8') {
                    value = '7' + value.substring(1);
                }
                let formatted = '+7';
                if (value.length > 1) {
                    formatted += ' (' + value.substring(1, 4);
                }
                if (value.length >= 5) {
                    formatted += ') ' + value.substring(4, 7);
                }
                if (value.length >= 8) {
                    formatted += '-' + value.substring(7, 9);
                }
                if (value.length >= 10) {
                    formatted += '-' + value.substring(9, 11);
                }
                e.target.value = formatted;
            }
        });