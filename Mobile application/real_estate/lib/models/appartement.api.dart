import 'dart:convert';
// import 'dart:html';
import 'package:real_estate/models/appartement.dart';
import 'package:http/http.dart' as http;



class AppartementApi {

  static Future<List<Appartement>> getAppartements() async {
    var url = Uri.parse('http://localhost:3000/appartement');
    var response = await http.get(url);
    List<Appartement> appartements = [];
    if (response.statusCode == 200) {
      var body = jsonDecode(response.body);
      
      // print (body);
      for (var item in body) {
        appartements.add(Appartement.fromJson(item));
      }
    }
    return appartements;
  }

  // Delete an appartement
  static Future<bool> deleteAppartement(int id) async {
    var url = Uri.parse('http://localhost:3000/appartement/$id');
    var response = await http.delete(url);
    if (response.statusCode == 200) {
      return true;
    }
    return false;
  }
  
}