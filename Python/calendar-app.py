import calendar
print("Welcome to calendar app!!!")


year_number = int(input("Please Enter Year: "))
month_number = int(input("Please Enter Month Number: "))

print(calendar.month(year_number, month_number))


print("Have a nice day!")