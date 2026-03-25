const indexClimateTrendElement = document.getElementById('indexClimateTrendChart');

    if (indexClimateTrendElement) {
      new Chart(indexClimateTrendElement, {
        type: 'line',
        data: {
          labels: ['Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha', 'Ya'],
          datasets: [
            {
              label: 'Tuproq namligi (%)',
              data: [61, 63, 60, 66, 64, 62, 64],
              borderColor: '#3a98e0',
              backgroundColor: '#3a98e0',
              pointBackgroundColor: '#8fd0ff',
              pointBorderColor: '#3a98e0',
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 5,
              borderWidth: 3,
              tension: 0.4,
              fill: false
            },
            {
              label: 'Harorat (°C)',
              data: [25, 27, 26, 29, 30, 28, 29],
              borderColor: '#ff5f7f',
              backgroundColor: '#ff5f7f',
              pointBackgroundColor: '#ffc0cf',
              pointBorderColor: '#ff5f7f',
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 5,
              borderWidth: 3,
              tension: 0.4,
              fill: false,
              yAxisID: 'y1'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                usePointStyle: true,
                boxWidth: 8,
                padding: 18,
                color: '#65737d',
                font: {
                  family: 'Inter, Arial, sans-serif',
                  size: 13
                }
              }
            },
            tooltip: {
              backgroundColor: '#15322d',
              titleFont: {
                family: 'Inter, Arial, sans-serif'
              },
              bodyFont: {
                family: 'Inter, Arial, sans-serif'
              },
              padding: 12,
              cornerRadius: 12
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#6b7f79',
                font: {
                  family: 'Inter, Arial, sans-serif',
                  size: 13
                }
              },
              border: {
                display: false
              }
            },
            y: {
              min: 40,
              max: 80,
              ticks: {
                stepSize: 5,
                color: '#6b7f79',
                font: {
                  family: 'Inter, Arial, sans-serif',
                  size: 13
                }
              },
              grid: {
                color: '#e8efed'
              },
              border: {
                display: false
              }
            },
            y1: {
              position: 'right',
              min: 20,
              max: 35,
              ticks: {
                color: '#6b7f79',
                font: {
                  family: 'Inter, Arial, sans-serif',
                  size: 13
                }
              },
              grid: {
                drawOnChartArea: false
              },
              border: {
                display: false
              }
            }
          }
        }
      });
    }