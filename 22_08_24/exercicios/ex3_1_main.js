"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex3_1_cliente_1 = require("./ex3_1_cliente");
const ex3_1_pedido_1 = require("./ex3_1_pedido");
const cliente1 = new ex3_1_cliente_1.Cliente('Gabriel Moura', 'gabrielmoura@example.com');
const pedido1 = new ex3_1_pedido_1.Pedido(cliente1, 'MacBook Pro', 8500.00);
pedido1.exibirInformacoes();
const cliente2 = new ex3_1_cliente_1.Cliente('Vinicius Moura', 'vinciusmoura@example.com');
const pedido2 = new ex3_1_pedido_1.Pedido(cliente2, 'MacBook', 7500.00);
pedido2.exibirInformacoes();
