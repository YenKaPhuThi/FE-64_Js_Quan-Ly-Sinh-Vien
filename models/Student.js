function Student(
  code,
  name,
  email,
  phone,
  type,
  math,
  physical,
  chemistry,
  training
) {
  this.code = code;
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.type = type;
  this.math = math;
  this.physical = physical;
  this.chemistry = chemistry;
  this.training = training;
  this.calculateAverage = function () {
    var average =
      Number(this.math) + Numner(this.physical) + Number(this.chemistry) / 3;

    return average;
  };

  this.arrangeLevel = function () {
    var level = "";
    var average = this.calculateAverage();

    if (Number(this.training) < 5) {
      level = "Yếu";
    } else {
      if (average < 5) {
        level = "Yếu";
      } else if (5 <= average < 6.5) {
        level = "Trung bình";
      } else if (6.5 <= average < 7.5) {
        level = "Trung bình khá";
      } else if (7.5 <= average < 8) {
        level = "Khá";
      } else if (8 <= average < 9) {
        level = "Giỏi";
      } else if (9 <= average <= 10) {
        level = "Xuất sắc";
      } else {
        level = "Không hợp lệ";
      }
    }

    return level;
  };
}
