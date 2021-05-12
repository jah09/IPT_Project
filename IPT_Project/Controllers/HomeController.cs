using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;


namespace IPT_Project.Controllers
{
    public class HomeController : Controller
    {
        string walletConn = ConfigurationManager.ConnectionStrings["EWALLETDBCONN"].ConnectionString;
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult UserAccount()
        {

            return View();

        }

        public ActionResult CreateAccount()

        {

            var data = new List<object>();
            var mess = 0;

            var lname = Request["lastname"];
            var fname = Request["firstname"];
            var email = Request["email"];
            var phone_num = Request["contact_number"];






            /*buhat na og connection string*/

            try
            {
                using (var db = new SqlConnection(walletConn))
                {
                    db.Open();
                    using (var cmd = db.CreateCommand())
                    {
                        cmd.CommandType = CommandType.Text;
                        cmd.CommandText = "INSERT INTO USERACCOUNT_TBL(CUSTOMER_FN,CUSTOMER_LN,CUSTOMER_EMAIL, CUSTOMER_NUM,PASSWORD)"
                                        + " VALUES ("
                                        + " @lname, "
                                        + " @fname, "
                                        + " @email, "
                                        + " @contactnum, "
                                        + " @pass) ";
                        cmd.Parameters.AddWithValue("@lname", lname);
                        cmd.Parameters.AddWithValue("@fname", fname);
                        cmd.Parameters.AddWithValue("@email", email);
                        cmd.Parameters.AddWithValue("@contactnum", phone_num);
                        cmd.Parameters.AddWithValue("@pass", lname);
                        var ctr = cmd.ExecuteNonQuery();
                        if (ctr >= 1)
                        {
                            mess = 1;

                        }
                        //data.Add(new
                       // {
                        //    mess = mess
                        //});
                        db.Close();


                    }
                }
            }
            catch (Exception ex)
           {

            }

            return Json(data, JsonRequestBehavior.AllowGet);
        }


        public ActionResult CashIn()
        {
            return View();

        }
        
        public ActionResult Cash_In()
        {

            var data = new List<object>();
            var mess = 0;


            var owner_name = Request["Ownername"];
            var cardnum = Request["Cardnumber"];
            var amount = Request["Amount"];
            var phonenumber = Request["contact_number"];



            
            try
             {
                 using (var db = new SqlConnection(walletConn))
                 {
                     db.Open();
                     using (var cmd = db.CreateCommand())
                     {
                         cmd.CommandType = CommandType.Text;
                         cmd.CommandText = "INSERT INTO CASHIN_TBL(CI_OWNERNAME,CI_CARDNUMBER,CI_AMOUNT,CI_CONTACTNUM)"
                                         + " VALUES ("
                                         + " @ownername, "
                                         + " @cardnum, "
                                         + " @amount, "
                                       
                                         + " @contactnum) ";
                         cmd.Parameters.AddWithValue("@ownername", owner_name);
                         cmd.Parameters.AddWithValue("@cardnum", cardnum);
                         cmd.Parameters.AddWithValue("@amount", amount);
                         
                         cmd.Parameters.AddWithValue("@contactnum", phonenumber);
                         var ctr = cmd.ExecuteNonQuery();
                         if (ctr >= 1)
                         {
                             mess = 1;

                         }
                         //data.Add(new
                         // {
                         //    mess = mess
                         //});
                         db.Close();


                     }
                 }
             }
            catch (Exception ex)
            {

            }

            return Json(data, JsonRequestBehavior.AllowGet);
        } 


        public ActionResult CashOut()
        {
            return View();
        }


        public ActionResult Inquiry()
        {
            return View();
        }


    }
}