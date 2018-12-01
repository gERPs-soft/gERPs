export class Product {
  id: number;
  assort_index: string;
  name: string;
  product_group: number;
  unitOfMasure: string;
  barcode: string;
  weight_unit: number;
  package_unit: string;
  number_in_package: number;
  height: number;
  weight: number;
  length: number;
  supplier: number;
  stock: number;
  price: number;
  vat: string;

  constructor(id: number, assort_index: string, name: string, product_group: number, unitOfMasure: string,
              barcode: string, weight_unit: number, package_unit: string, number_in_package: number, height: number,
              weight: number, length: number, supplier: number, stock: number, price: number, vat: string) {
    this.id = id;
    this.assort_index = assort_index;
    this.name = name;
    this.product_group = product_group;
    this.unitOfMasure = unitOfMasure;
    this.barcode = barcode;
    this.weight_unit = weight_unit;
    this.package_unit = package_unit;
    this.number_in_package = number_in_package;
    this.height = height;
    this.weight = weight;
    this.length = length;
    this.supplier = supplier;
    this.stock = stock;
    this.price = price;
    this.vat = vat;
  }
}
