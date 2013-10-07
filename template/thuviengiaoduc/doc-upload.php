<?php
/**
 * Project: thuvien.
 * File: doc-upload.php.
 * Author: Ken Zaki
 * Email: kenzaki@xiao.vn
 * Create Date: 18:47 - 05/10/2013
 * Website: www.xiao.vn
 */
include_once "header.php";
?>
    </head>
<body>

<?php require_once "top.php";?>
<?php require_once "nav.php";?>
    <div class="containt_center_top clear"></div>
    <div class="containt_center_cen clear">
        <table cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td valign="top" class="containt_center_cen_left">

                    <?php require_once "breadcrumb.php";?>

                    <div class="comment_bai_hoc clear">

                    <form action="" method="post" onsubmit="return register()" autocomplete="off" id="bnv_formReg">
                    <div class="res_box">
                    <div class="hc_box_title">
                        <div class="hc_box_title_left"></div>
                        <div class="hc_box_title_center">ĐĂNG KÝ THÀNH VIÊN</div>
                        <div class="hc_box_title_right"></div>
                    </div>

                    <div class="row-input-other-2">
                        <div class="box-other-lg-2">
                            <h3>Đăng ký nhanh bằng tài khoản:</h3>
                            <ul>
                                <li><a title="Đăng nhập bằng tài khoản Facebook" class="icon-fb" id="icon-fb" href="javascript:void(0)">&nbsp;</a></li>
                                <li><a title="Đăng nhập bằng tài khoản Google" identity="g" class="icon-gg openid" href="javascript:void(0)">&nbsp;</a></li>
                                <li><a title="Đăng nhập bằng tài khoản Yahoo" identity="y" class="icon-yh openid" href="javascript:void(0)">&nbsp;</a></li>
                            </ul>
                        </div>
                    </div>
                    <h3 class="note-mau-regis">Hoặc đăng ký thông thường bằng cách điền thông tin vào mẫu bên dưới:</h3>
                    <div class="res_step_title">
                        <div class="res_step_t_num res_num1">Thông tin tài khoản</div>
                        <div class="res_step_t_r"></div>
                    </div>
                    <div class="res_notes">Các mục có dấu <span class="red"> * </span>  là bắt buộc phải điền</div>
                    <div class="res_form_row">
                        <div class="res_f_r_left">
                            <div class="res_f_r_left_up"><b>Tên đăng nhập </b>(ít nhất 5 kí tự): <span class="red">*</span></div>
                            <div class="res_f_r_left_down">Ví dụ: hoctienganh</div>
                        </div>
                        <div class="res_f_r_right">
                            <input class="res_input" id="username"  name="username" maxlength="16" value="" type="text">
                            <div id="er_username" class="res_f_note"></div>
                        </div>
                    </div>
                    <div class="res_form_row">
                        <div class="res_f_r_left">
                            <div class="res_f_r_left_up"><b>Mật khẩu </b>(ít nhất 6 kí tự): <span class="red">*</span></div>
                            <div class="res_f_r_left_down">Mật khẩu phải bao gồm cả chữ cái và chữ số, có ít nhất 1 chữ cái viết hoa, 1 chữ cái viết thường, 1 chữ số và không được chứa khoảng trắng</div>
                        </div>
                        <div class="res_f_r_right">
                            <input class="res_input res_input_pass" onclick="this.select()" id="password" type="password" >
                        </div>
                    </div>
                    <div class="res_form_row">
                        <div class="res_f_r_left">
                            <div class="res_f_r_left_up"><b>Xác nhận lại mật khẩu </b>: <span class="red">*</span></div>
                            <div class="res_f_r_left_down">Bạn hãy nhập lại mật khẩu ở trên</div>
                        </div>
                        <div class="res_f_r_right">
                            <input class="res_input res_input_pass" onclick="this.select()" id="repassword" type="password" >
                            <div id="er_password" class="res_f_note"></div>
                        </div>
                    </div>
                    <div class="res_form_row">
                        <div class="res_f_r_left">
                            <div class="res_f_r_left_up"><b>Địa chỉ email của bạn</b>: <span class="red">*</span></div>
                            <div class="res_f_r_left_down">Bạn hãy nhập email của bạn</div>
                        </div>
                        <div class="res_f_r_right">
                            <input id="res_email" class="res_input" type="text" >
                            <div id="er_email" class="res_f_note"></div>
                        </div>
                    </div>
                    <div class="res_notes font_weight">Email đăng ký phải là email thật để bạn có được những quyền lợi về sau như đổi mật khẩu...</div>
                    <div class="res_step_title">
                        <div class="res_step_t_num res_num2">Thông tin cá nhân</div>
                        <div class="res_step_t_r"></div>
                    </div>
                    <div class="res_form_row">
                        <div class="res_f_r_left">
                            <div class="res_f_r_left_up">Họ và Tên: </div>
                        </div>
                        <div class="res_f_r_right">
                            <input id="res_name" class="res_input" type="text" >
                            <div id="er_hoten" class="res_f_note"></div>
                        </div>
                        <div id="sex">
                            <div class="res_radio_box">
                                <div rel="male" class="res_radio_ic res_radio_checked" alt="true"></div>
                                <div class="res_radio_te">Nam</div>
                            </div>
                            <div class="res_radio_box">
                                <div rel="female" class="res_radio_ic"></div>
                                <div class="res_radio_te">Nữ</div>
                            </div>
                        </div>
                    </div>
                    <div class="res_form_row">
                    <div class="res_f_r_left">
                        <div class="res_f_r_left_up">Ngày sinh:</div>
                    </div>
                    <div class="res_f_r_right">
                    <div class="res_select">
                        <label>
                            <select id="day">
                                <option value="">---</option>

                                <option value="1">1</option>

                                <option value="2">2</option>

                                <option value="3">3</option>

                                <option value="4">4</option>

                                <option value="5">5</option>

                                <option value="6">6</option>

                                <option value="7">7</option>

                                <option value="8">8</option>

                                <option value="9">9</option>

                                <option value="10">10</option>

                                <option value="11">11</option>

                                <option value="12">12</option>

                                <option value="13">13</option>

                                <option value="14">14</option>

                                <option value="15">15</option>

                                <option value="16">16</option>

                                <option value="17">17</option>

                                <option value="18">18</option>

                                <option value="19">19</option>

                                <option value="20">20</option>

                                <option value="21">21</option>

                                <option value="22">22</option>

                                <option value="23">23</option>

                                <option value="24">24</option>

                                <option value="25">25</option>

                                <option value="26">26</option>

                                <option value="27">27</option>

                                <option value="28">28</option>

                                <option value="29">29</option>

                                <option value="30">30</option>

                                <option value="31">31</option>

                            </select>
                        </label>​
                    </div>
                    <div class="res_select">
                        <label>
                            <select id="mon">
                                <option value="">-------</option>

                                <option value="1">Tháng 1</option>

                                <option value="2">Tháng 2</option>

                                <option value="3">Tháng 3</option>

                                <option value="4">Tháng 4</option>

                                <option value="5">Tháng 5</option>

                                <option value="6">Tháng 6</option>

                                <option value="7">Tháng 7</option>

                                <option value="8">Tháng 8</option>

                                <option value="9">Tháng 9</option>

                                <option value="10">Tháng 10</option>

                                <option value="11">Tháng 11</option>

                                <option value="12">Tháng 12</option>

                            </select>
                        </label>​
                    </div>
                    <div class="res_select res_select_last">
                        <label>
                            <select id="year">
                                <option value="">-----</option>

                                <option value="2013" >2013</option>

                                <option value="2012" >2012</option>

                                <option value="2011" >2011</option>

                                <option value="2010" >2010</option>

                                <option value="2009" >2009</option>

                                <option value="2008" >2008</option>

                                <option value="2007" >2007</option>

                                <option value="2006" >2006</option>

                                <option value="2005" >2005</option>

                                <option value="2004" >2004</option>

                                <option value="2003" >2003</option>

                                <option value="2002" >2002</option>

                                <option value="2001" >2001</option>

                                <option value="2000" >2000</option>

                                <option value="1999" >1999</option>

                                <option value="1998" >1998</option>

                                <option value="1997" >1997</option>

                                <option value="1996" >1996</option>

                                <option value="1995" >1995</option>

                                <option value="1994" >1994</option>

                                <option value="1993" >1993</option>

                                <option value="1992" >1992</option>

                                <option value="1991" >1991</option>

                                <option value="1990" >1990</option>

                                <option value="1989" >1989</option>

                                <option value="1988" >1988</option>

                                <option value="1987" >1987</option>

                                <option value="1986" >1986</option>

                                <option value="1985" >1985</option>

                                <option value="1984" >1984</option>

                                <option value="1983" >1983</option>

                                <option value="1982" >1982</option>

                                <option value="1981" >1981</option>

                                <option value="1980" >1980</option>

                                <option value="1979" >1979</option>

                                <option value="1978" >1978</option>

                                <option value="1977" >1977</option>

                                <option value="1976" >1976</option>

                                <option value="1975" >1975</option>

                                <option value="1974" >1974</option>

                                <option value="1973" >1973</option>

                                <option value="1972" >1972</option>

                                <option value="1971" >1971</option>

                                <option value="1970" >1970</option>

                                <option value="1969" >1969</option>

                                <option value="1968" >1968</option>

                                <option value="1967" >1967</option>

                                <option value="1966" >1966</option>

                                <option value="1965" >1965</option>

                                <option value="1964" >1964</option>

                                <option value="1963" >1963</option>

                                <option value="1962" >1962</option>

                                <option value="1961" >1961</option>

                                <option value="1960" >1960</option>

                                <option value="1959" >1959</option>

                                <option value="1958" >1958</option>

                                <option value="1957" >1957</option>

                                <option value="1956" >1956</option>

                                <option value="1955" >1955</option>

                                <option value="1954" >1954</option>

                                <option value="1953" >1953</option>

                                <option value="1952" >1952</option>

                                <option value="1951" >1951</option>

                                <option value="1950" >1950</option>

                                <option value="1949" >1949</option>

                                <option value="1948" >1948</option>

                                <option value="1947" >1947</option>

                                <option value="1946" >1946</option>

                                <option value="1945" >1945</option>

                                <option value="1944" >1944</option>

                                <option value="1943" >1943</option>

                                <option value="1942" >1942</option>

                                <option value="1941" >1941</option>

                                <option value="1940" >1940</option>

                                <option value="1939" >1939</option>

                                <option value="1938" >1938</option>

                                <option value="1937" >1937</option>

                                <option value="1936" >1936</option>

                                <option value="1935" >1935</option>

                                <option value="1934" >1934</option>

                                <option value="1933" >1933</option>

                                <option value="1932" >1932</option>

                                <option value="1931" >1931</option>

                                <option value="1930" >1930</option>

                                <option value="1929" >1929</option>

                                <option value="1928" >1928</option>

                                <option value="1927" >1927</option>

                                <option value="1926" >1926</option>

                                <option value="1925" >1925</option>

                                <option value="1924" >1924</option>

                                <option value="1923" >1923</option>

                                <option value="1922" >1922</option>

                                <option value="1921" >1921</option>

                                <option value="1920" >1920</option>

                            </select>
                        </label>​
                    </div>
                    </div>
                    <div class="res_radio_box">
                        <div id="showns" class="res_check_ic" alt="false"></div>
                        <div class="res_radio_te">Ẩn ngày sinh với mọi người</div>
                    </div>
                    </div>
                    <div class="res_form_row">
                        <div class="res_f_r_left">
                            <div class="res_f_r_left_up">Địa chỉ: </div>
                        </div>
                        <div class="res_f_r_right">
                            <input id="res_address" class="res_input" type="text" >
                        </div>
                        <div class="res_radio_box">
                            <div id="show_address" class="res_check_ic" alt="false"></div>
                            <div class="res_radio_te">Ẩn địa chỉ với mọi người</div>
                        </div>
                    </div>
                    <div class="res_form_row">
                    <div class="res_f_r_left">
                        <div class="res_f_r_left_up">Quốc gia: </div>
                    </div>
                    <div class="res_select">
                    <label>
                    <select id="national" name="national">
                    <option selected="selected" value="0">------------------</option>

                    <option selected="" value="United States">United States</option>

                    <option selected="" value="Canada">Canada</option>

                    <option selected="" value="Abu Dhabi">Abu Dhabi</option>

                    <option selected="" value="Afghanistan">Afghanistan</option>

                    <option selected="" value="Ajman">Ajman</option>

                    <option selected="" value="Aland Islands">Aland Islands</option>

                    <option selected="" value="Albania">Albania</option>

                    <option selected="" value="Alderney">Alderney</option>

                    <option selected="" value="Algeria">Algeria</option>

                    <option selected="" value="American Samoa">American Samoa</option>

                    <option selected="" value="Andorra">Andorra</option>

                    <option selected="" value="Angola">Angola</option>

                    <option selected="" value="Anguilla">Anguilla</option>

                    <option selected="" value="Antarctica">Antarctica</option>

                    <option selected="" value="Antigua and Barbuda">Antigua and Barbuda</option>

                    <option selected="" value="Argentina">Argentina</option>

                    <option selected="" value="Armenia">Armenia</option>

                    <option selected="" value="Aruba">Aruba</option>

                    <option selected="" value="Australia-Aboriginal">Australia-Aboriginal</option>

                    <option selected="" value="Australia">Australia</option>

                    <option selected="" value="Austria">Austria</option>

                    <option selected="" value="Azerbaijan">Azerbaijan</option>

                    <option selected="" value="Azores">Azores</option>

                    <option selected="" value="Bahamas">Bahamas</option>

                    <option selected="" value="Bahrain">Bahrain</option>

                    <option selected="" value="Balearic Islands">Balearic Islands</option>

                    <option selected="" value="Bangladesh">Bangladesh</option>

                    <option selected="" value="Barbados">Barbados</option>

                    <option selected="" value="Belarus">Belarus</option>

                    <option selected="" value="Belgium">Belgium</option>

                    <option selected="" value="Belize">Belize</option>

                    <option selected="" value="Benin">Benin</option>

                    <option selected="" value="Bermuda">Bermuda</option>

                    <option selected="" value="Bhutan">Bhutan</option>

                    <option selected="" value="Bolivia">Bolivia</option>

                    <option selected="" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>

                    <option selected="" value="Botswana">Botswana</option>

                    <option selected="" value="Bouvet Island">Bouvet Island</option>

                    <option selected="" value="Brazil">Brazil</option>

                    <option selected="" value="British Antarctic Territory">British Antarctic Territory</option>

                    <option selected="" value="British Indian Ocean Territory">British Indian Ocean Territory</option>

                    <option selected="" value="British Virgin Islands">British Virgin Islands</option>

                    <option selected="" value="Brunei">Brunei</option>

                    <option selected="" value="Bulgaria">Bulgaria</option>

                    <option selected="" value="Burkina Faso">Burkina Faso</option>

                    <option selected="" value="Burundi">Burundi</option>

                    <option selected="" value="Cambodia">Cambodia</option>

                    <option selected="" value="Cameroon">Cameroon</option>

                    <option selected="" value="Canary Islands">Canary Islands</option>

                    <option selected="" value="Cape Verde">Cape Verde</option>

                    <option selected="" value="Cayman Islands">Cayman Islands</option>

                    <option selected="" value="Central African Republic">Central African Republic</option>

                    <option selected="" value="Chad">Chad</option>

                    <option selected="" value="Chile">Chile</option>

                    <option selected="" value="China">China</option>

                    <option selected="" value="Christmas Island">Christmas Island</option>

                    <option selected="" value="Cocos Islands">Cocos Islands</option>

                    <option selected="" value="Colombia">Colombia</option>

                    <option selected="" value="Comoros">Comoros</option>

                    <option selected="" value="Congo-Brazzaville">Congo-Brazzaville</option>

                    <option selected="" value="Congo-Kinshasa">Congo-Kinshasa</option>

                    <option selected="" value="Cook Islands">Cook Islands</option>

                    <option selected="" value="Coral Sea Islands">Coral Sea Islands</option>

                    <option selected="" value="Costa Rica">Costa Rica</option>

                    <option selected="" value="Cote DIvoire">Cote DIvoire</option>

                    <option selected="" value="Croatia">Croatia</option>

                    <option selected="" value="Cuba">Cuba</option>

                    <option selected="" value="Cyprus">Cyprus</option>

                    <option selected="" value="Czech Republic">Czech Republic</option>

                    <option selected="" value="Denmark">Denmark</option>

                    <option selected="" value="Djibouti">Djibouti</option>

                    <option selected="" value="Dominica">Dominica</option>

                    <option selected="" value="Dominican Republic">Dominican Republic</option>

                    <option selected="" value="Dubai">Dubai</option>

                    <option selected="" value="East Timor">East Timor</option>

                    <option selected="" value="Ecuador">Ecuador</option>

                    <option selected="" value="Egypt">Egypt</option>

                    <option selected="" value="El Salvador">El Salvador</option>

                    <option selected="" value="England">England</option>

                    <option selected="" value="Equatorial Guinea">Equatorial Guinea</option>

                    <option selected="" value="Eritrea">Eritrea</option>

                    <option selected="" value="Estonia">Estonia</option>

                    <option selected="" value="Ethiopia">Ethiopia</option>

                    <option selected="" value="Falkland Islands">Falkland Islands</option>

                    <option selected="" value="Faroe Islands">Faroe Islands</option>

                    <option selected="" value="Fiji">Fiji</option>

                    <option selected="" value="Finland">Finland</option>

                    <option selected="" value="France">France</option>

                    <option selected="" value="French Guiana Independentist">French Guiana Independentist</option>

                    <option selected="" value="French Guiana">French Guiana</option>

                    <option selected="" value="French Polynesia">French Polynesia</option>

                    <option selected="" value="Fujairah">Fujairah</option>

                    <option selected="" value="Gabon">Gabon</option>

                    <option selected="" value="Gambia">Gambia</option>

                    <option selected="" value="Georgia">Georgia</option>

                    <option selected="" value="Germany">Germany</option>

                    <option selected="" value="Ghana">Ghana</option>

                    <option selected="" value="Gibraltar">Gibraltar</option>

                    <option selected="" value="Greece">Greece</option>

                    <option selected="" value="Greenland">Greenland</option>

                    <option selected="" value="Grenada">Grenada</option>

                    <option selected="" value="Guadeloupe">Guadeloupe</option>

                    <option selected="" value="Guam">Guam</option>

                    <option selected="" value="Guatemala">Guatemala</option>

                    <option selected="" value="Guernsey">Guernsey</option>

                    <option selected="" value="Guinea-Bissau">Guinea-Bissau</option>

                    <option selected="" value="Guinea">Guinea</option>

                    <option selected="" value="Guyana">Guyana</option>

                    <option selected="" value="Haiti">Haiti</option>

                    <option selected="" value="Heard and McDonald Islands">Heard and McDonald Islands</option>

                    <option selected="" value="Honduras">Honduras</option>

                    <option selected="" value="Hong Kong">Hong Kong</option>

                    <option selected="" value="Hungary">Hungary</option>

                    <option selected="" value="Iceland">Iceland</option>

                    <option selected="" value="India">India</option>

                    <option selected="" value="Indonesia">Indonesia</option>

                    <option selected="" value="Iran">Iran</option>

                    <option selected="" value="Iraq">Iraq</option>

                    <option selected="" value="Ireland">Ireland</option>

                    <option selected="" value="Isle of Man">Isle of Man</option>

                    <option selected="" value="Israel">Israel</option>

                    <option selected="" value="Italy">Italy</option>

                    <option selected="" value="Jamaica">Jamaica</option>

                    <option selected="" value="Japan">Japan</option>

                    <option selected="" value="Jersey">Jersey</option>

                    <option selected="" value="Jordan">Jordan</option>

                    <option selected="" value="Kazakhstan">Kazakhstan</option>

                    <option selected="" value="Kenya">Kenya</option>

                    <option selected="" value="Kiribati">Kiribati</option>

                    <option selected="" value="Kuwait">Kuwait</option>

                    <option selected="" value="Kyrgyzstan">Kyrgyzstan</option>

                    <option selected="" value="Laos">Laos</option>

                    <option selected="" value="Latvia">Latvia</option>

                    <option selected="" value="Lebanon">Lebanon</option>

                    <option selected="" value="Lesotho">Lesotho</option>

                    <option selected="" value="Liberia">Liberia</option>

                    <option selected="" value="Libya">Libya</option>

                    <option selected="" value="Liechtenstein">Liechtenstein</option>

                    <option selected="" value="Lithuania">Lithuania</option>

                    <option selected="" value="Lord Howe Island">Lord Howe Island</option>

                    <option selected="" value="Luxembourg">Luxembourg</option>

                    <option selected="" value="Macao">Macao</option>

                    <option selected="" value="Macedonia">Macedonia</option>

                    <option selected="" value="Madagascar">Madagascar</option>

                    <option selected="" value="Madeira">Madeira</option>

                    <option selected="" value="Malawi">Malawi</option>

                    <option selected="" value="Malaysia">Malaysia</option>

                    <option selected="" value="Maldives">Maldives</option>

                    <option selected="" value="Mali">Mali</option>

                    <option selected="" value="Malta">Malta</option>

                    <option selected="" value="Marshall Islands">Marshall Islands</option>

                    <option selected="" value="Martinique">Martinique</option>

                    <option selected="" value="Mauritania">Mauritania</option>

                    <option selected="" value="Mauritius">Mauritius</option>

                    <option selected="" value="Mayotte">Mayotte</option>

                    <option selected="" value="Mexico">Mexico</option>

                    <option selected="" value="Micronesia">Micronesia</option>

                    <option selected="" value="Midway Islands">Midway Islands</option>

                    <option selected="" value="Moldova">Moldova</option>

                    <option selected="" value="Monaco">Monaco</option>

                    <option selected="" value="Mongolia">Mongolia</option>

                    <option selected="" value="Montenegro">Montenegro</option>

                    <option selected="" value="Montserrat">Montserrat</option>

                    <option selected="" value="Morocco">Morocco</option>

                    <option selected="" value="Mozambique">Mozambique</option>

                    <option selected="" value="Myanmar">Myanmar</option>

                    <option selected="" value="Namibia">Namibia</option>

                    <option selected="" value="Nauru">Nauru</option>

                    <option selected="" value="Nepal">Nepal</option>

                    <option selected="" value="Netherlands Antilles">Netherlands Antilles</option>

                    <option selected="" value="Netherlands">Netherlands</option>

                    <option selected="" value="New Caledonia">New Caledonia</option>

                    <option selected="" value="New Zealand-Maori">New Zealand-Maori</option>

                    <option selected="" value="New Zealand">New Zealand</option>

                    <option selected="" value="Nicaragua">Nicaragua</option>

                    <option selected="" value="Niger">Niger</option>

                    <option selected="" value="Nigeria">Nigeria</option>

                    <option selected="" value="Niue">Niue</option>

                    <option selected="" value="Norfolk Island">Norfolk Island</option>

                    <option selected="" value="North Korea">North Korea</option>

                    <option selected="" value="Northern Cyprus">Northern Cyprus</option>

                    <option selected="" value="Northern Ireland">Northern Ireland</option>

                    <option selected="" value="Northern Marianas">Northern Marianas</option>

                    <option selected="" value="Norway">Norway</option>

                    <option selected="" value="Oman">Oman</option>

                    <option selected="" value="Orkney Islands">Orkney Islands</option>

                    <option selected="" value="Pakistan">Pakistan</option>

                    <option selected="" value="Palau">Palau</option>

                    <option selected="" value="Palestine">Palestine</option>

                    <option selected="" value="Panama">Panama</option>

                    <option selected="" value="Papua New Guinea">Papua New Guinea</option>

                    <option selected="" value="Paraguay">Paraguay</option>

                    <option selected="" value="Peru">Peru</option>

                    <option selected="" value="Philippine">Philippine</option>

                    <option selected="" value="Pitcairn Islands">Pitcairn Islands</option>

                    <option selected="" value="Poland">Poland</option>

                    <option selected="" value="Portugal,">Portugal,</option>

                    <option selected="" value="Puerto Rico">Puerto Rico</option>

                    <option selected="" value="Qatar">Qatar</option>

                    <option selected="" value="Ras al-Khaimah">Ras al-Khaimah</option>

                    <option selected="" value="Reunion">Reunion</option>

                    <option selected="" value="Romania">Romania</option>

                    <option selected="" value="Russian Federation,">Russian Federation,</option>

                    <option selected="" value="Rwanda">Rwanda</option>

                    <option selected="" value="Sami">Sami</option>

                    <option selected="" value="Samoa">Samoa</option>

                    <option selected="" value="San Marino">San Marino</option>

                    <option selected="" value="Sao Tome e Principe">Sao Tome e Principe</option>

                    <option selected="" value="Sark">Sark</option>

                    <option selected="" value="Saudi Arabia">Saudi Arabia</option>

                    <option selected="" value="Scotland">Scotland</option>

                    <option selected="" value="Seborga">Seborga</option>

                    <option selected="" value="Senegal">Senegal</option>

                    <option selected="" value="Serbia">Serbia</option>

                    <option selected="" value="Seychelles">Seychelles</option>

                    <option selected="" value="Sharjah">Sharjah</option>

                    <option selected="" value="Shetland Islands">Shetland Islands</option>

                    <option selected="" value="Sierra Leone">Sierra Leone</option>

                    <option selected="" value="Sikkim">Sikkim</option>

                    <option selected="" value="Singapore">Singapore</option>

                    <option selected="" value="Slovakia">Slovakia</option>

                    <option selected="" value="Slovenia">Slovenia</option>

                    <option selected="" value="Solomon Islands">Solomon Islands</option>

                    <option selected="" value="Somalia">Somalia</option>

                    <option selected="" value="Somaliland">Somaliland</option>

                    <option selected="" value="South Africa">South Africa</option>

                    <option selected="" value="South Korea">South Korea</option>

                    <option selected="" value="Spain">Spain</option>

                    <option selected="" value="Sri Lanka">Sri Lanka</option>

                    <option selected="" value="St Helena">St Helena</option>

                    <option selected="" value="St Kitts and Nevis">St Kitts and Nevis</option>

                    <option selected="" value="St Lucia">St Lucia</option>

                    <option selected="" value="St Pierre and Miquelon">St Pierre and Miquelon</option>

                    <option selected="" value="St Vincent and the Grenadines">St Vincent and the Grenadines</option>

                    <option selected="" value="Sudan">Sudan</option>

                    <option selected="" value="uriname">uriname</option>

                    <option selected="" value="Swaziland">Swaziland</option>

                    <option selected="" value="Sweden">Sweden</option>

                    <option selected="" value="Switzerland">Switzerland</option>

                    <option selected="" value="Syria">Syria</option>

                    <option selected="" value="Tahiti">Tahiti</option>

                    <option selected="" value="Taiwan">Taiwan</option>

                    <option selected="" value="Tajikstan">Tajikstan</option>

                    <option selected="" value="Tanzania">Tanzania</option>

                    <option selected="" value="Thailand">Thailand</option>

                    <option selected="" value="Tibet">Tibet</option>

                    <option selected="" value="Togo">Togo</option>

                    <option selected="" value="Tokelau">Tokelau</option>

                    <option selected="" value="Tonga">Tonga</option>

                    <option selected="" value="Trinidad and Tobago">Trinidad and Tobago</option>

                    <option selected="" value="Tromelin">Tromelin</option>

                    <option selected="" value="Tunisia">Tunisia</option>

                    <option selected="" value="Turkey">Turkey</option>

                    <option selected="" value="Turkmenistan">Turkmenistan</option>

                    <option selected="" value="Tuvalu">Tuvalu</option>

                    <option selected="" value="US Virgin Islands">US Virgin Islands</option>

                    <option selected="" value="Uganda">Uganda</option>

                    <option selected="" value="Ukraine">Ukraine</option>

                    <option selected="" value="Umm al-Qaiwan">Umm al-Qaiwan</option>

                    <option selected="" value="United Kingdom">United Kingdom</option>

                    <option selected="" value="United Nations">United Nations</option>

                    <option selected="" value="Uruguay">Uruguay</option>

                    <option selected="" value="Uzbekistan">Uzbekistan</option>

                    <option selected="" value="Vanuatu">Vanuatu</option>

                    <option selected="" value="Vatican City State">Vatican City State</option>

                    <option selected="" value="Venezuela">Venezuela</option>

                    <option selected="" value="Wake Island">Wake Island</option>

                    <option selected="" value="Wales">Wales</option>

                    <option selected="" value="Wallis &amp; Futuna">Wallis &amp; Futuna</option>

                    <option selected="" value="Western Sahara">Western Sahara</option>

                    <option selected="" value="Yemen">Yemen</option>

                    <option selected="" value="Yugoslavia">Yugoslavia</option>

                    <option selected="" value="Zambia">Zambia</option>

                    <option selected="" value="Zimbabwe">Zimbabwe</option>

                    <option selected="" value="Vietnam">Vietnam</option>

                    </select>​
                    </label>
                    </div>
                    </div>
                    <div class="res_form_row">
                        <div class="res_f_r_left">
                            <div class="res_f_r_left_up">Nơi công tác / trường: </div>
                        </div>
                        <div class="res_f_r_right">
                            <input id="res_school" class="res_input" type="text" >
                        </div>
                    </div>
                    <div class="res_step_title">
                        <div class="res_step_t_num res_num3">Quy định sử dụng</div>
                        <div class="res_step_t_r"></div>
                    </div>
                    <div class="res_form_row">
                        <div class="res_radio_box">
                            <div id="dieukhoan" class="res_check_ic res_radio_checked res_radio_checked" alt="true"></div>
                            <div class="res_radio_te"><span class="font_weight">Tôi đồng ý với<a href="2310-quy-dinh-su-dung.html" tppabs="http://www.thuviengiaoduc.org/huong-dan/2310-quy-dinh-su-dung.html" target="_blank" class="blue2"> Điều khoản và Quy định sử dụng</a> tại TiếngAnh123 <span class="red">*</span></span></div>

                        </div>
                    </div>
                    <div id="er_dieukhoan" class="res_f_note"></div>
                    <div class="res_form_row">
                        <div class="res_f_r_left res_code_te">
                            <div class="res_f_r_left_up">Bạn hãy điền 6 kí tự bên hình vào ô bên cạnh để hoàn thành</div>
                        </div>
                        <div class="res_f_r_right">
                            <div class="res_code_img"><img id="reloadCapcha"  src="captcha.php.png" tppabs="http://www.thuviengiaoduc.org/pages/captcha.php"></div>
                            <div class="res_code_bt"><a href="javascript:;" id="rsreloadCapcha"><img src="res_bt_code.png" tppabs="http://www.thuviengiaoduc.org/images/home/res_bt_code.png"></a></div>
                            <input class="res_input res_input_code" id="code" type="text" >
                            <div id="er_code" class="res_f_note"></div>
                        </div>
                        <div class="res_form_bt">
                            <input type="submit" value="" class="res_form_sub">
                        </div>
                        <div class="res_form_bt">
                            <a href="index.htm" tppabs="http://www.thuviengiaoduc.org/" class="res_form_can"></a>
                        </div>

                    </div>

                    </div>
                    </form>

                    </div>

                </td>
                <?php
                include_once "sidebar.php";
                ?>
            </tr>
        </table>
    </div>

<?php
include_once "footer.php";
?>