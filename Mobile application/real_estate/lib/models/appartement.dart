// In this file, we define the Appartement class
// based on the API https://app.swaggerhub.com/apis/LeTouristeDeLECAM/Agence_Immobiliere/1.0

class Appartement {
  final int id;
  final String title;
  final String description;
  final String price;
  final String surface;
  final String nbRooms;
  final String address;

  Appartement({
    required this.id,
    required this.title,
    required this.description,
    required this.price,
    required this.surface,
    required this.nbRooms,
    required this.address
  });

  factory Appartement.fromJson(Map<String, dynamic> json) {
    return Appartement(
      id: json['id'],
      title: json['title'],
      description: json['description'],
      price: json['price'],
      surface: json['surface'],
      nbRooms: json['nbRooms'],
      address: json['address'],
    );
  }


static List<Appartement> appartementsFromSnapshot(List snapshot) {
    return snapshot.map((data) {
      return Appartement.fromJson(data);
    }).toList();
  }

@override
  String toString() {
    return 'Appartement{id: $id, title: $title, description: $description, price: $price, surface: $surface, nbRooms: $nbRooms, address: $address}';
  }

}