/*se ingresan numeros (distintos a 0), no se sabe cuantos
se pide mostrar:
-cant de pares e impares
-porcentaje de pos y neg
-maximo y minimo
-maximo numero par
-cant de numeros entre 125 y 236*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num;
    char respuesta = 's';
    int contPares = 0;
    int contImpares = 0;
    int contPos = 0;
    int contNeg = 0;
    int contNum;
    float porcPos;
    float porcNeg;
    int maximo;
    int minimo;
    int flag = 0;
    int maxPar;
    int flag2 = 0;
    int contPiola = 0;


    while(respuesta != 'n')
    {
        printf("\nIngrese un numero: ");
        scanf("%d", &num);
                while(num == 0)
        {
            printf("\nError reingrese: ");
            scanf("%d", &num);
        }

        if((num % 2) == 0)
        {
            contPares++;
            if(flag2 == 0 || num > maxPar)
            {
                maxPar = num;
                flag2 = 1;
            }
        }
        else
        {
            contImpares++;
        }
        if(num > 0)
        {
            contPos++;
        }
        else
        {
            contNeg++;
        }

        if(num > maximo || flag == 0)
        {
            maximo = num;
        }
        if(num < minimo || flag == 0)
        {
            minimo = num;
            flag = 1;
        }


        if(num > 124 && num < 237)
        {
            contPiola++;
        }

        printf("Desea continuar? ");
        respuesta = getche();
    }
    contNum = contPos + contNeg;
    porcPos = (float)(contPos * 100) / contNum;
    porcNeg = 100 - porcPos;

    printf("\nLa cantidad de numeros pares es %d y la cantidad de impares es %d", contPares, contImpares);
    printf("\nEl porcentaje de numeros positivos es %.2f y el porcentaje de negativos es %.2f", porcPos, porcNeg);
    printf("\nEL numero maximo es %d y el minimo es %d", maximo, minimo);
    printf("\nEL numero maximo par es %d", maxPar);
    printf("\nLa cantidad de numeros entre 125 y 236 es %d", contPiola);
        return 0;
}
