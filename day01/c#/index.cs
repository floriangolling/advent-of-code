using System;
using System.IO;
using System.Collections.Generic;

namespace Advent {
      
    class adv {          
        static void Main(string[] args) {
            string stream = File.ReadAllText("./inputs.txt");
            string[] array = stream.Split('\n');
            One(array);
            Two(array);
            Console.ReadKey();
        }


        static void One(string[] array) {
            int count = 0;
            for (int i = 1; i < array.Length - 1; i++) {
                if (int.Parse(array[i]) > int.Parse(array[i - 1])) {
                    count++;
                }
            }
            Console.WriteLine(count);
        }


        static void Two(string[] array) {
            int count = 0;
            List<int> list = new List<int>();
        
            for (int i = 0; i < array.Length - 2; i++) {
                list.Add(int.Parse(array[i]) + int.Parse(array[i + 1]) + int.Parse(array[i + 2]));
            }
            for (int i = 0; i < list.Count - 1; i++) {
                if (list[i + 1] > list[i])
                    count++;
            }
            Console.WriteLine(count);
        }
    }
}