const categoryImages = {
      Flights: {
        src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=82",
        title: "Flights: your journey starts in the sky",
        text: "Airport, runway and in-flight imagery shown for your flight search."
      },
      Hotels: {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=82",
        title: "Hotels: find your stay",
        text: "Hotel and resort imagery appears here when you search for accommodation."
      },
      Cabs: {
        src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1400&q=82",
        title: "Cabs: ride through the city",
        text: "City-road and car imagery appears here when you search for a cab."
      }
    };

    const travelOptions = {
      Flights: [
        { name: "United Airlines", detail: "Nonstop · 6h 12m · 1 cabin bag", time: "08:25 AM", price: 428, icon: "✈️" },
        { name: "JetBlue", detail: "Nonstop · 6h 34m · Carry-on included", time: "10:10 AM", price: 389, icon: "🛫" },
        { name: "Delta Air Lines", detail: "1 stop · 8h 05m · 1 cabin bag", time: "12:40 PM", price: 342, icon: "🌤️" }
      ],
      Hotels: [
        { name: "The Hoxton, Williamsburg", detail: "4 stars · Free cancellation · Breakfast", time: "Check-in 3 PM", price: 219, icon: "🏨" },
        { name: "Arlo Midtown", detail: "4 stars · Rooftop terrace · Great location", time: "Check-in 3 PM", price: 184, icon: "🏙️" },
        { name: "The Local NY", detail: "3 stars · Shared lounge · Near subway", time: "Check-in 2 PM", price: 129, icon: "🛎️" }
      ],
      Cabs: [
        { name: "Comfort Sedan", detail: "Private ride · 4 seats · 2 bags", time: "Pickup in 5 min", price: 42, icon: "🚘" },
        { name: "Premium SUV", detail: "Private ride · 6 seats · 4 bags", time: "Pickup in 8 min", price: 68, icon: "🚙" },
        { name: "City Saver", detail: "Standard ride · 4 seats · 2 bags", time: "Pickup in 7 min", price: 29, icon: "🚕" }
      ]
    };
