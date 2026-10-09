import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonList, IonLabel, IonItem, IonBadge,
         IonCheckbox, IonButton, IonIcon, IonFab, IonFabButton, IonInput, IonTextarea, IonSelect, IonSelectOption, IonText } from '@ionic/angular';
import { trash, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';


interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'Baja' | 'Media' | 'Alta';
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonList, IonLabel, IonItem,
            IonBadge, IonCheckbox, IonButton, IonIcon,  IonInput, IonTextarea, IonSelect, IonSelectOption, ReactiveFormsModule, IonText],
})




export class HomePage {

    mostrarFormulario = false;
    formulario = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: [''],
      prioridad: ['Media', Validators.required]
    });

    
    agregarTarea() {
      if (this.formulario.invalid) {
        this.formulario.markAllAsTouched();
        return;
      }

      const valores = this.formulario.getRawValue();

      const nuevaTarea: Task = {
        id: Date.now(),
        title: valores.titulo!.trim(),
        description: valores.descripcion ?? '',
        priority: valores.prioridad as 'Alta' | 'Media' | 'Baja',
        completed: false
      };

      this.tareas = [...this.tareas, nuevaTarea];

      localStorage.setItem('tareas', JSON.stringify(this.tareas));

      this.formulario.reset({
        titulo: '',
        descripcion: '',
        prioridad: 'Media'
      });

      this.mostrarFormulario = false;
    }



  constructor(private formBuilder: FormBuilder) {
    addIcons({
      trash, add
    });

    const guardadas = localStorage.getItem('tareas');

    if (guardadas) {
      this.tareas = JSON.parse(guardadas);
  }

  }
  
  tareas: Task[] = [
    {
      id: 1,
      title: 'Lengua Espanola',
      description: 'Estudiar Sobre el Reportaje',
      priority: 'Alta',
      completed: true
    },
    {
      id: 2,
      title: 'Matematica',
      description: 'Resolver Ejercicios',
      priority: 'Media',
      completed: false
    }
  ];

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(
      tarea => tarea.id !== id
    );

    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  
  cambiarEstado(tarea: Task, completada: boolean) {
    tarea.completed = completada;

    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
}
