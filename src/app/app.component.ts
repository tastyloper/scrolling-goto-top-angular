import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>JavaScript Scrolling goto top</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, repudiandae quia. Veniam amet fuga, eveniet velit ipsa repudiandae nemo? Sit dolorem itaque laudantium dignissimos, rerum maiores nihil ad voluptates nostrum.
    </p>
  
    <div appScroll class="scoll-icon fa fa-angle-double-up"></div>
  `,
  styles: [`
    h1 {
      color: #DB5B33;
      font-weight: 300;
      text-align: center;
    }
    .scoll-icon {
      position: fixed;
      left: 50%;
      bottom: 20px;
      font-size: 36px;
      cursor: pointer;
      animation: glow 4s infinite;
      display: none;
    }
    @keyframes glow {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.3;
        transform: translateY(10px);
      }
    }
  `]
})
export class AppComponent {}
