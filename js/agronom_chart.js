const climateElement = document.getElementById('climateTrendChart');
    const waterElement = document.getElementById('waterShareChart');

    if (climateElement) {
      new Chart(climateElement, {
        type: 'line',
        data: {
          labels: ['Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha', 'Ya'],
          datasets: [
            {
              label: 'Tuproq namligi (%)',
              data: [61, 63, 60, 66, 64, 62, 64],
              borderWidth: 3,
              tension: 0.38,
              fill: false
            },
            {
              label: 'Harorat (°C)',
              data: [25, 27, 26, 29, 30, 28, 29],
              borderWidth: 3,
              tension: 0.38,
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
                font: {
                  family: 'Inter'
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  family: 'Inter'
                }
              }
            },
            y: {
              min: 40,
              max: 80,
              ticks: {
                font: {
                  family: 'Inter'
                }
              },
              grid: {
                color: '#eef2f7'
              }
            },
            y1: {
              position: 'right',
              min: 20,
              max: 35,
              grid: {
                drawOnChartArea: false
              },
              ticks: {
                font: {
                  family: 'Inter'
                }
              }
            }
          }
        }
      });
    }

    if (waterElement) {
      new Chart(waterElement, {
        type: 'doughnut',
        data: {
          labels: ['1-zona', '2-zona', '3-zona', '4-zona'],
          datasets: [
            {
              data: [28, 24, 16, 32],
              borderWidth: 0,
              hoverOffset: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '68%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                boxWidth: 10,
                padding: 18,
                font: {
                  family: 'Inter'
                }
              }
            }
          }
        }
      });
    }