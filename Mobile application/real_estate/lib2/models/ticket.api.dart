import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:real_estate/models/ticket_model.dart';
import 'package:http/http.dart' as http;

import 'package:real_estate/route/route.dart' as route;



class TicketApi {
  get id => null;

  // static get id => null;
  // get the ticket from the api using the id of the appartement
  // static Future<List<Ticket>> getTickets(int id) async {


  // get ticket list from the api using the id of the appartement int id
  static Future<List<Ticket>> getTickets(int id ) async {
    // var url = Uri.parse('http://localhost:3000/appartement/'+id.toString()+'ticket');

    // 
    
    var url = Uri.parse('http://localhost:3000/appartement/'+id.toString()+'/ticket');
    var response = await http.get(url);
    List<Ticket> ticket = [];
    if (response.statusCode == 200) {
      var body = jsonDecode(response.body);
      
      // print (body);
      for (var item in body) {
        ticket.add(Ticket.fromJson(item));
      }
    }
    return ticket;
  }

  // // Get a ticket from the api using the id of the ticket
  // static Future<Ticket> getTicket(int id) async {
  //   var url = Uri.parse('http://localhost:3000/ticket/$id');
  //   var response = await http.get(url);
  //   Ticket ticket = Ticket();
  //   if (response.statusCode == 200) {
  //     var body = jsonDecode(response.body);
  //     ticket = Ticket.fromJson(body);
  //   }
  //   return ticket;
  // }

  
}

