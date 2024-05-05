import React from 'react'
import { useRef, useState, useEffect } from 'react';

const BackgroundAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      // Set canvas size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      // Define your dots and lines here (position coordinates)
      const dots = [
        { x: 100, y: 100 },
        { x: 200, y: 200 },
        { x: 300, y: 100 },
        // Add more dots as needed
      ];
  
      const lines = [
        [0, 1],
        [1, 2],
        // Define which dots to connect with lines
      ];
  
      // Define animation properties
      const animationInterval = 500; // Interval between dot appearances in milliseconds
      let currentDotIndex = 0;
  
      // Function to draw a dot
      function drawDot(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'white'; // Color of the dots
        ctx.fill();
      }
  
      // Function to draw a line between two dots
      function drawLine(dot1, dot2) {
        ctx.beginPath();
        ctx.moveTo(dot1.x, dot1.y);
        ctx.lineTo(dot2.x, dot2.y);
        ctx.strokeStyle = 'white'; // Color of the lines
        ctx.stroke();
      }
  
      // Function to draw the animation
      function draw() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Draw dots up to the current index
        for (let i = 0; i <= currentDotIndex; i++) {
          drawDot(dots[i].x, dots[i].y);
        }
  
        // Draw lines
        lines.forEach(([dot1Index, dot2Index]) => {
          if (dot1Index <= currentDotIndex && dot2Index <= currentDotIndex) {
            drawLine(dots[dot1Index], dots[dot2Index]);
          }
        });
  
        // Increment current dot index
        currentDotIndex++;
  
        // Reset current dot index if all dots have been drawn
        if (currentDotIndex >= dots.length) {
          currentDotIndex = 0;
        }
  
        // Request next frame
        requestAnimationFrame(draw);
      }
  
      // Start the animation
      draw();
  
      // Clean up function
      return () => {
        cancelAnimationFrame(draw);
      };
    }, []);
  
    return <canvas ref={canvasRef}></canvas>;
  }

export default BackgroundAnimation