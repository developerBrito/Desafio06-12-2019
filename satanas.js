ETEC Professor Hor�cio Augusto da Silveira
Avalia��o de Design Digital � Segundo Bimestre � Usabilidade e Padr�es de Projeto

Nome:KLEBER DOS SANTOS BRITO



private void btnBanana_Click(object sender, EventArgs e)
{double banana;
double choppe; 
double guarana;
 try {banana=Convert.ToString(banana);guarana=Math.Sqrt(guarana);choppe=Convert.ToString(choppe);
 guarana=Convert.ToString(guarana); txtResultado.Text = banana,choppe,guarana;} 
 catch(FormatException){ MessageBox.Show("Formata��o Errada.");}}


1.	Organize o c�digo acima segundo o que foi explicado nas aulas de t�cnicas de programa��o 
afim de garantir legibilidade e sustentabilidade do c�digo.

2.	Desenhe uma classe que implemente o c�digo acima como um m�todo. 
						
						CLASSE PRODUTO
						--------------------
						-banana
						-choppe
						-guarana
						--------------------
						+incluir()
						+alterar()
						+inativar()
						+consultarValidade()
						+inserirPreco()
						


						

class Produto
{
	private string banana;
	private string choppe;
	private string guarana;
	
		public string banana { get => banana; set => banana = value; }
        public string choppe { get => choppe; set => choppe = value; }
        public string guarana{ get => guarana; set => guarana = value; }
}