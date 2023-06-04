import 'dart:convert';
// import 'dart:html';
import 'package:real_estate/models/appartement.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';




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

    final storage = FlutterSecureStorage();
    String? token = await storage.read(key: 'token');

    var headers = {'Authorization': 'Bearer $token'};
    print (headers);

    var response = await http.delete(url, headers: headers);
    if (response.statusCode == 200) {
      return true;
    }
    return false;
  }

  // Add an appartement
  static Future<bool> addAppartement(Appartement appartement) async {
    var url = Uri.parse('http://localhost:3000/appartement');

    final storage = FlutterSecureStorage();
    String? token = await storage.read(key: 'token');

    var headers = {'Authorization': 'Bearer $token'};
    print (headers);

    var response = await http.post(url, body: jsonEncode(appartement.toString()), headers: headers);
    if (response.statusCode == 200) {
      return true;
    }
    return false;
  }

  // Update an appartement
  static Future<bool> updateAppartement(Appartement appartement) async {
    var url = Uri.parse('http://localhost:3000/appartement/${appartement.appart_Id}');

    final storage = FlutterSecureStorage();
    String? token = await storage.read(key: 'token');

    var headers = {'Authorization': 'Bearer $token'};
    print (headers);


    // header contains the token





    var response = await http.put(url, body: jsonEncode(appartement.toString()), headers: headers);
    if (response.statusCode == 200) {
      return true;
    }
    return false;
  }

  
  
}