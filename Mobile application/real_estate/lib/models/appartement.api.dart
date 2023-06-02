import 'dart:convert';
import 'package:real_estate/models/appartement.dart';
import 'package:http/http.dart' as http;



class AppartementApi {

  static Future<List<Appartement>> getAppartements() async {
    var url = Uri.parse('http://localhost:3000/appartement');
    var response = await http.get(url);
    List<Appartement> appartements = [];
    if (response.statusCode == 200) {
      var body = jsonDecode(response.body);
      for (var item in body) {
        appartements.add(Appartement.fromJson(item));
      }
    }
    return appartements;
  }
}