import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importação do angular firestore
import { Produto } from './../models/Produto'; //Faz a importanção da classe da entidade do Produto

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private afs: AngularFirestore) { } //instacia na variavel afs  o Angular FireStore

  //Método para salvar novos produtos no Firebase
  //Recebe uma instancia da Classe Produto
  salvar(produto: Produto){
    return this.afs.collection('produtos').add({...produto});
  }

  //Busca todos o produtos armazenados
  buscarProdutos() {
    return this.afs.collection('produtos').snapshotChanges();
  }

  //Buscar por um Produto atraves do seu ID
  buscarPorId(id: string) {
    // o metodo doc faz referencia a apenas um documento(registro) no banco
    return this.afs.collection('produtos').doc(id).valueChanges();
  }

  //Altera um registro do banco
  alterar(produto: Produto) {
    return this.afs.collection('produtos').doc(produto.id).update({...produto});
  }

  //Deleta um arquivo do banco
  deletar(id: string) {
    return this.afs.doc('produtos/'+ id).delete();
  }
}
