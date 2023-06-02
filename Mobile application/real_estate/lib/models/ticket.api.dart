import 'dart:convert';
import 'package:real_estate/models/ticket.dart';
import 'package:http/http.dart' as http;



class TicketApi {
  static get id => null;


  static Future<List<Ticket>> getTickets() async {
    var url = Uri.parse('http://localhost:3000/appartement/'+id.toString()+'ticket');
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
}

