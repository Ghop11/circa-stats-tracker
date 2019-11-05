/*
*
*
*  parse PDF data from Season standing to get user name and user points
*  lets add record and picks just to have in the array just in case I need it
*  parse PDF data from Selection and append to array that matches players number
*  this will be sent to the state => playersData in store
*  make axios call to nfl to get game scores.
*
*
*
*
*
* */


// Getting data from python script that parses a pdf
// going to ask circa if I can either get access to their apis or get their csv file
let topPlayerSelection = [['JADE MARI-1', '20.00', '2. CARDINALS +10', '11. CHIEFS -2', '17. RAIDERS -2', '24. CHARGERS +3½', '25. PATRIOTS -3½'], ['THE NATURE BOY-1', '30.00', '12. VIKINGS +2', '17. RAIDERS -2', '20. BUCS +5½', '23. PACKERS -3½', '28. GIANTS +7'], ['HITMAN-1', '30.00', '4. JAGUARS +1½', '5. BILLS -9½', '9. EAGLES -4½', '12. VIKINGS +2', '20. BUCS +5½'], ['MJTADE-1', '29.50', '5. BILLS -9½', '10. BEARS +4½', '12. VIKINGS +2', '19. SEAHAWKS -5½', '26. RAVENS +3½'], ['GEOPETER-1', '28.00', '8. TITANS +3½', '12. VIKINGS +2', '14. DOLPHINS +3', '20. BUCS +5½', '26. RAVENS +3½'], ['OSHAG CLEVELAND-1', '28.00', '4. JAGUARS +1½', '9. EAGLES -4½', '16. STEELERS +1', '23. PACKERS -3½', '27. COWBOYS -7'], ['CHARLIEFROG-1', '28.00', '2. CARDINALS +10', '10. BEARS +4½', '15. COLTS -1', '24. CHARGERS +3½', '27. COWBOYS -7'], ['Shirmp Foot-1', '28.00', '2. CARDINALS +10', '9. EAGLES -4½', '14. DOLPHINS +3', '25. PATRIOTS -3½', '28. GIANTS +7'], ['DINK-1', '27.50', '9. EAGLES -4½', '12. VIKINGS +2', '21. BROWNS -3½', '23. PACKERS -3½', '27. COWBOYS -7'], ['2 HORSEMEN-1', '27.50', '12. VIKINGS +2', '15. COLTS -1', '18. LIONS +2', '23. PACKERS -3½', '25. PATRIOTS -3½'], ['RELENTLESS-1', '27.50', '5. BILLS -9½', '12. VIKINGS +2', '15. COLTS -1', '21. BROWNS -3½', '23. PACKERS -3½'], ['ACE DEUCE-1', '27.50', '4. JAGUARS +1½', '8. TITANS +3½', '15. COLTS -1', '17. RAIDERS -2', '20. BUCS +5½'], ['JAX 2 WIN-1', '27.50', '4. JAGUARS +1½', '16. STEELERS +1', '18. LIONS +2', '20. BUCS +5½', '24. CHARGERS +3½'], ['Booty Blockers-1', '27.50', '7. PANTHERS -3½', '12. VIKINGS +2', '14. DOLPHINS +3', '15. COLTS -1', '19. SEAHAWKS -5½'], ['305 MIYAYO-1', '27.50', '4. JAGUARS +1½', '13. JETS -3', '15. COLTS -1', '20. BUCS +5½', '23. PACKERS -3½'], ['DMOEN21-1', '27.00', '3. TEXANS -1½', '9. EAGLES -4½', '12. VIKINGS +2', '23. PACKERS -3½', '25. PATRIOTS -3½'], ['The Matador 1-1', '27.00', '7. PANTHERS -3½', '12. VIKINGS +2', '23. PACKERS -3½', '25. PATRIOTS -3½', '27. COWBOYS -7'], ['ACE2019-1', '27.00', '3. TEXANS -1½', '10. BEARS +4½', '11. CHIEFS -2', '19. SEAHAWKS -5½', '24. CHARGERS +3½'], ['MANANA-1', '27.00', '7. PANTHERS -3½', '12. VIKINGS +2', '16. STEELERS +1', '21. BROWNS -3½', '28. GIANTS +7'], ["TV's Funhouse-1", '27.00', '4. JAGUARS +1½', '9. EAGLES -4½', '15. COLTS -1', '21. BROWNS -3½', '26. RAVENS +3½'], ["Pro's And Con's-1", '27.00', '5. BILLS -9½', '7. PANTHERS -3½', '9. EAGLES -4½', '12. VIKINGS +2', '13. JETS -3'], ['GOLDEN MONKEY-1', '27.00', '1. 49ERS -10', '6. REDSKINS +9½', '11. CHIEFS -2', '23. PACKERS -3½', '25. PATRIOTS -3½'], ['JOEYTUNES-1', '27.00', '12. VIKINGS +2', '13. JETS -3', '20. BUCS +5½', '23. PACKERS -3½', '28. GIANTS +7'], ['Bronx Zoo-1', '27.00', '16. STEELERS +1', '17. RAIDERS -2', '20. BUCS +5½', '24. CHARGERS +3½', '26. RAVENS +3½'], ['CB ELITE-1', '27.00', '5. BILLS -9½', '7. PANTHERS -3½', '16. STEELERS +1', '19. SEAHAWKS -5½', '22. BRONCOS +3½'], ['Gamblers Anonymous-1', '27.00', '3. TEXANS -1½', '8. TITANS +3½', '15. COLTS -1', '23. PACKERS -3½', '28. GIANTS +7'], ['Golconda Fund-1', '26.50', '5. BILLS -9½', '12. VIKINGS +2', '13. JETS -3', '20. BUCS +5½', '25. PATRIOTS -3½'], ['Live Odds-1', '26.50', '5. BILLS -9½', '7. PANTHERS -3½', '9. EAGLES -4½', '12. VIKINGS +2', '28. GIANTS +7'], ['MICHAELS-1', '26.50', '8. TITANS +3½', '9. EAGLES -4½', '12. VIKINGS +2', '13. JETS -3', '28. GIANTS +7'], ['WAR JAG-1', '26.50', '6. REDSKINS +9½', '10. BEARS +4½', '13. JETS -3', '20. BUCS +5½', '28. GIANTS +7'], ['Best Bets Analytics-1', '26.50', '4. JAGUARS +1½', '8. TITANS +3½', '12. VIKINGS +2', '25. PATRIOTS -3½', '27. COWBOYS -7']];



let games = [['Ravens', '+3.5', 3.5, 'Patriots', '-3.5', 0, 'NA'], ['Raiders', '-2.0', 31, 'Lions', '+2.0', 26.0, 'Raiders'], ['Seahawks', '-5.5', 40, 'Bucs', '+5.5', 39.5, 'Seahawks'], ['Broncos', '+3.5', 27.5, 'Browns', '-3.5', 19, 'Broncos'], ['Chargers', '+3.5', 29.5, 'Packers', '-3.5', 11, 'Chargers'], ['Jaguars', '+1.5', 4.5, 'Texans', '-1.5', 26, 'Texans'], ['Bills', '-9.5', 24, 'Redskins', '+9.5', 18.5, 'Bills'], ['Panthers', '-3.5', 30, 'Titans', '+3.5', 23.5, 'Panthers'], ['Chiefs', '-2.0', 26, 'Vikings', '+2.0', 25.0, 'Chiefs'], ['Dolphins', '+3.0', 29.0, 'Jets', '-3.0', 18, 'Dolphins'], ['Eagles', '-4.5', 22, 'Bears', '+4.5', 18.5, 'Eagles'], ['Steelers', '+1.0', 27.0, 'Colts', '-1.0', 24, 'Steelers'], ['Giants', '+7.0', 7.0, 'Cowboys', '-7.0', 0, 'NA'], ['Cardinals', '+10.0', 35.0, '49ers', '-10.0', 28, 'Cardinals']];




let quarter2 = [['JADE MARI-1', '15', '6-8-1-0', '6.50'], ['BIG GAR + CO-1', '15', '13-2-0-0', '13.00'], ['The Matador 1-1', '15', '13-2-0-0', '13.00'], ['Knights 2 Cup-1', '15', '12-2-1-0', '12.50'], ['Best Bets Analytics-1', '15', '12-2-1-0', '12.50'], ['Caluch 622-1', '15', '12-2-1-0', '12.50'], ['Concrete Mike-2', '15', '12-2-1-0', '12.50'], ["Cope's Picks-1", '15', '12-2-1-0', '12.50'], ['JD on the rocks-1', '15', '12-2-1-0', '12.50'], ['Gamblers Anonymous-1', '15', '12-2-1-0', '12.50'], ['BNL-1', '15', '12-3-0-0'], ['2.00', '10', 'T', 'MarkAdShark1-1'], ['512-3-0-0', '12', '.00', '10T'], ['NUMBERBALL-1', '15', '12-3-0-0', '12.00'], ['J BALLERS.COM-1', '15', '12-3-0-0'], ['2.00', '10', 'T', 'TWEEDLED TWEEDLED-1'], ['512-3-0-0', '12', '.00', '10T'], ['LOS PRIMOS-1', '15', '12-3-0-0', '12.00'], ['DINQUE-2', '15', '12-3-0-0'], ['2.00', '10', 'T', 'THE NATURE BOY-1'], ['512-3-0-0', '12', '.00', '10T'], ['JOEYTUNES-1', '15', '12-3-0-0', '12.00'], ['POOHANDBANANAS-2', '15', '12-3-0-0'], ['2.00', '10', 'T', 'WALTERFOOTBALL.COM.-1'], ['512-3-0-0', '12', '.00', '10T'], ['The Matador 1-2', '15', '12-3-0-0', '12.00'], ['DECKPRISMSPORTS-3', '15', '12-3-0-0'], ['2.00', '10', 'T', "Da' MONEY MAKERS-1"], ['512-3-0-0', '12', '.00', '10T'], ['St Cloud Connection-1', '15', '12-3-0-0', '12.00'], ["TV's Funhouse-1", '15', '12-3-0-0'], ['2.00', '26', 'T', 'GEOPETER-1'], ['511-3-1-0', '11', '.50', '26T'], ['SAKA-1', '15', '11-3-1-0', '11.50'], ['SAKA-2', '15', '11-3-1-0'], ['1.50', '26', 'T', 'SAKA-3'], ['511-3-1-0', '11', '.50', '26T'], ['NBD_Gancho-1', '15', '11-3-1-0', '11.50'], ['FLIP FLOP-1', '15', '11-3-1-0'], ['1.50', '26', 'T', 'FLIP FLOP-2'], ['511-3-1-0', '11', '.50', '26T'], ['Booty Blockers-1', '15', '11-3-1-0', '11.50'], ['MYMILLYEN-1', '15', '11-3-1-0'], ['1.50', '26', 'T', 'Giant Panda D-1'], ['511-3-1-0', '11', '.50', '26T'], ['WORDS WORDS WORDS-1', '15', '11-3-1-0', '11.50'], ['ELLIE BELLIE 2015-1', '15', '11-3-1-0'], ['1.50', '26', 'T', '10GUYSFROMQUEENS-1'], ['511-3-1-0', '11', '.50', '26T'], ['2 HORSEMEN-1', '15', '11-3-1-0', '11.50'], ['DogDog 77 !!!-1', '15', '11-3-1-0'], ['1.50', '26', 'T', 'WHAT UP SMITTY-2'], ['511-3-1-0', '11', '.50', '26T'], ['DINK-1', '15', '11-3-1-0', '11.50'], ['GAS STATION SUSHI-1', '15', '11-3-1-0'], ['1.50', '26', 'T', 'NUMBERBALL-3'], ['511-3-1-0', '11', '.50', '26T'], ['BEV-2', '15', '11-3-1-0', '11.50'], ['2Seanz-1', '15', '11-3-1-0'], ['1.50', '26', 'T', 'DANCING MACHINE-2'], ['511-3-1-0', '11', '.50', '48T'], ['CHARLIEFROG-1', '15', '11-4-0-0', '11.00'], ['SUPER SENIOR STEVE-1', '15', '11-4-0-0'], ['1.00', '48', 'T', 'thebetbot.com-1']];

export default {
    topPlayerSelection,
    games,
    quarter2
}



